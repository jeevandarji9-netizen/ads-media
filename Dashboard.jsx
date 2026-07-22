import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ClientCard from "../components/ClientCard";

const demoClients = [
  {
    id:1,
    company:"Google Ads",
    username:"google01",
    status:"Active"
  },
  {
    id:2,
    company:"Instagram",
    username:"insta22",
    status:"Active"
  },
  {
    id:3,
    company:"Facebook",
    username:"fbuser",
    status:"Pending"
  }
];

export default function Dashboard(){

    return(

<div className="flex bg-slate-100 min-h-screen">

<Sidebar/>

<div className="flex-1">

<Navbar/>

<div className="p-6">

<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl shadow p-5">
<h2 className="text-gray-500">Total Clients</h2>
<p className="text-3xl font-bold mt-2">120</p>
</div>

<div className="bg-white rounded-xl shadow p-5">
<h2 className="text-gray-500">Active</h2>
<p className="text-3xl font-bold text-green-600 mt-2">115</p>
</div>

<div className="bg-white rounded-xl shadow p-5">
<h2 className="text-gray-500">Pending</h2>
<p className="text-3xl font-bold text-yellow-600 mt-2">5</p>
</div>

<div className="bg-white rounded-xl shadow p-5">
<h2 className="text-gray-500">Today's Login</h2>
<p className="text-3xl font-bold text-blue-600 mt-2">36</p>
</div>

</div>

<div className="mt-8">

<div className="flex justify-between items-center mb-4">

<h2 className="text-2xl font-bold">
Clients
</h2>

<button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
+ Add Client
</button>

</div>

<div className="grid lg:grid-cols-3 gap-6">

{demoClients.map((client)=>(
<ClientCard
key={client.id}
client={client}
/>
))}

</div>

</div>

</div>

</div>

</div>

    )

}
