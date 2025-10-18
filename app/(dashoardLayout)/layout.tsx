import Sidebar from "@/components/Sidbar";


export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex">
      
        <Sidebar/>
        {children}
        
    </div>
  );
}