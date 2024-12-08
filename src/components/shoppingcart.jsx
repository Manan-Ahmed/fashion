
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { FaShoppingBag } from "react-icons/fa";


  export default function ShoppingCart(){
    return(
        <>
        

<Sheet>
<SheetTrigger><FaShoppingBag />
</SheetTrigger>
<SheetContent className="w-[400px] sm:w-[540px]">
  <SheetHeader>
    <SheetTitle>Are you absolutely sure?</SheetTitle>
    <SheetDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </SheetDescription>
  </SheetHeader>
</SheetContent>
</Sheet>
        </>
    )
  }


