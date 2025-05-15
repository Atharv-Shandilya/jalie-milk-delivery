import CustomerRow from "@/components/ui/CustomerRow";
import CustomersFilter from "@/components/ui/CustomersFilter";
import ScreenLayout from "@/components/ui/ScreenLayout";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CustomersRoot() {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState(0);
  const customerData = [
    {
      id: 1,
      name: "Arvind Kumar",
      phone: "9973305617",
      quantity: 5,
      amount: 300,
    },
    {
      id: 2,
      name: "Priya Singh",
      phone: "9876543210",
      quantity: 3,
      amount: 180,
    },
    {
      id: 3,
      name: "Rahul Sharma",
      phone: "9123456789",
      quantity: 7,
      amount: 420,
    },
    {
      id: 4,
      name: "Sunita Devi",
      phone: "9988776655",
      quantity: 2,
      amount: 1200,
    },
    {
      id: 5,
      name: "Vikas Patel",
      phone: "9090909090",
      quantity: 4,
      amount: 240,
    },
    {
      id: 6,
      name: "Meena Gupta",
      phone: "9012345678",
      quantity: 6,
      amount: 360,
    },
    {
      id: 7,
      name: "Suresh Yadav",
      phone: "9234567810",
      quantity: 8,
      amount: 480,
    },
    {
      id: 8,
      name: "Anita Sharma",
      phone: "9345678123",
      quantity: 5.5,
      amount: 330,
    },
    {
      id: 9,
      name: "Ravi Verma",
      phone: "9456781234",
      quantity: 10,
      amount: 600,
    },
    {
      id: 10,
      name: "Kiran Joshi",
      phone: "9567812345",
      quantity: 2.5,
      amount: 150,
    },
    {
      id: 11,
      name: "Deepak Singh",
      phone: "9678123456",
      quantity: 9,
      amount: 540,
    },
    {
      id: 12,
      name: "Neha Agarwal",
      phone: "9781234567",
      quantity: 7.5,
      amount: 450,
    },
  ];

  return (
    <ScreenLayout
      header={"Customers"}
      buttonType={1}
      link="(tabs)/(customers)/addCustomer"
      label="Add Customer"
    >
      <CustomersFilter option={option} setOption={setOption} />

      <View>
        <View className="flex-row px-3 py-4 border-b mb-5">
          <Text className="mr-8 ext-sm font-bold">customer name</Text>
          <Text className="mr-6 text-sm font-bold">phone no</Text>
          <Text className="mr-7 text-sm font-bold">this month</Text>
          <Text className="text-sm font-bold">dues</Text>
        </View>

        {customerData.map((curr, index) => {
          return <CustomerRow key={curr.id} {...curr} index={index} />;
        })}
      </View>
      <View className="flex-row border-b">
        <Text className="px-4 py-3 rounded-md">
          {(page - 1) * 12 + 1} - {page * 12} Customer
        </Text>
      </View>
      <View className="flex-row justify-center my-[20px] items-center">
        <TouchableOpacity
          disabled={page == 1}
          className="disabled:opacity-15"
          onPress={() => {
            setPage((prev) => {
              if (prev == 1) return 1;
              return prev - 1;
            });
          }}
        >
          <Text className="border px-[20px] py-[8px] rounded-md">Prev</Text>
        </TouchableOpacity>
        <Text className="mx-10">{page}</Text>
        <TouchableOpacity
          onPress={() => {
            setPage((prev) => prev + 1);
          }}
        >
          <Text className="border px-[20px] py-[8px] rounded-md">Next</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
}
