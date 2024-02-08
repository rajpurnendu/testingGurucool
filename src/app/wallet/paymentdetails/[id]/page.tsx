import Paymentfailure from "@/components/PaymentSuccess&Faliure/components/Paymentfailure";
import Paymentsuccess from "@/components/PaymentSuccess&Faliure/components/Paymentsuccess";
import { getPaymentStatus } from "@/lib/data";

const Paymentstatus = async ({ params }: { params: { id: string } }) => {
  const inputString = decodeURIComponent(params.id);
  const parts = inputString.split("=");
  const result = parts[1];
  const data = await getPaymentStatus(result);
  return (
    <div className="flex h-[80vh] text-center items-center justify-center">
      <div className="w-[72rem]">
        <div className="mb-4 mt-0">
          {data?.status === "captured" ||
          data?.status === "authorized" ||
          data?.status === "completed" ? (
            <Paymentsuccess data={data} />
          ) : (
            <Paymentfailure data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Paymentstatus;
