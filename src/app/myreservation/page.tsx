import ReservationList from "@/components/ReservationList";
import ReservationForm from "@/components/ReservationForm";

export default function MyBook() {
    return (
        <div className="p-2 flex flex-row justify-between items-center px-24 ">
            <ReservationList />
            <ReservationForm isUpdate={false} id={null} />
        </div>
    )
}