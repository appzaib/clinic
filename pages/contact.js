



export default function Contact(){


    return(
        <>
       <div class="justify-center flex">
<div class="w-full my-5 lg:mx-auto flex flex-col items-center bg-cyan-400">
    <div class="md:w-4/5 h-full  text-white p-10"> <span>
            <h1 class="text-3xl font-semibold text-center mb-4 text-yellow-300">Contact Us</h1>
            <p class="text-xs font-normal mt-2 text-center">Contact us by filling this contact form So we shell be in touch with you.</p>
        </span>
        <div class="mt-6 leading-7 text-center"> 
            <input type="text" name="" placeholder="Full Name" id=""
                class="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-cyan-400 focus:outline-none"/>
            <input type="email" name="" placeholder="Email Address" id=""
                class="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-cyan-400 focus:outline-none"/>
            <input type="tel" name="phone" placeholder="Phone Number" id="phone"
                class="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-cyan-400 focus:outline-none"/>
            <textarea id="message" name="message" placeholder="Write us a message"
                class="w-[80%] bg-cyan-400 border-2 border-white h-44 text-sm outline-none placeholder:text-white placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea>
            <button
                class="block m-auto w-[60%] md:w-[50%] text-center border bg-yellow-300 rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-yellow-400">Send</button>
        </div>
    </div>
   
</div>
</div>
        </>
    )
}