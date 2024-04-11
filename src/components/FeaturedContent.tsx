
'use client'
import { useEffect, useState } from "react"
import { BackgroundGradient } from "./ui/background-gradient"
import Link from "next/link"
interface content{
    item_id:string,
    link:string,
    title:string,
    body:string,

}
function FeaturedContent() {
    const [data,setData]=useState<[]>([])
    // const jp_morgain=data.filter((item:content)=>item.title==='JP morgan')
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/news')
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
            // console.log(data);
            setIsLoading(false)

        })

    },[])
    const flattendata=data.flat()
     console.log(flattendata);
    if(isLoading){
        return <div>Loading...</div>
    }
  return (
    <div >
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        { 
            flattendata.map((item:content)=>(
                <div key={item.item_id} className="flex justify-center">
                    <BackgroundGradient
                    className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    {/* <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-4" /> */}
                    <p className="text-2xl  text-white mt-4 mb-2 dark:text-neutral-200">{item.title }</p>
                    <p className="text-white">{item.body}</p>
                    <Link href={item.link} className="text-blue-600">
                        Read More..
                        </Link>
                    </div>
                    </BackgroundGradient>                
                </div>
            ))
        }
        </div>
   
    </div>
  )
}

export default FeaturedContent