"use client";
import { Button } from "@/components/ui/button";
import { CheckboxV2 } from "@/components/ui/checkbox-v2";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/data/constant";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { client } from "../../../../../sanity/lib/client";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Email is required"),
  phone: z.string().min(10, "Phone is required").max(10),
  message: z.string(),
  services: z.array(z.string()).min(1, "Atleast one service is required"),
  companyName: z.string().optional(),
});

const query = groq`*[_type == 'service']`;

const ContactUsForm = () => {
  const [services, setServices] = useState<Service[] | []>([]);

  const fetchServices = async () => {
    const data = await client.fetch(query);
    setServices(data);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      companyName: "",
      email: "",
      message: "",
      name: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.loading("Sending Message");
    const contact = {
      _type: "contactUs",
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message,
      companyName: values.companyName,
      services: values.services.map((service) => {
        return {
          _type: "reference",
          _ref: service,
          _key: service,
        };
      }),
    };
    client
      .create(contact)
      .then(() => {
        form.reset();
        toast.success("Our Team member will contact you soon");
      })
      .catch((err) => {
        toast.error("Unable to Send message");
        console.log(err);
      })
      .finally(() => {
        toast.dismiss();
      });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 "
      >
        <Toaster />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem className="col-span-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="test@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />{" "}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />{" "}
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input placeholder="Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            return (
              <FormItem className="col-span-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="services"
          render={({ field }) => {
            return (
              <FormItem className="col-span-full">
                <FormLabel>Services</FormLabel>
                <div className="flex gap-2 items-center flex-wrap">
                  {services?.map((service) => {
                    return (
                      <FormField
                        key={service._id}
                        name="services"
                        control={form.control}
                        render={({}) => {
                          const checked = field.value?.includes(service._id)
                            ? true
                            : false;

                          return (
                            <FormItem>
                              <FormControl>
                                <CheckboxV2
                                  checked={checked}
                                  className={cn()}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          service._id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== service._id
                                          )
                                        );
                                  }}
                                >
                                  <p className="cursor-pointer">
                                    {service.title}
                                  </p>
                                </CheckboxV2>
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                    );
                  })}
                </div>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button className="col-span-full" size={"lg"}>
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
