import TournamentCard from "@/components/TournamentCard";
export default function Tournaments() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-black">Tournaments</h1>
      <section className="p-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-600 mb-4">Upcoming Tournaments</h2>
      
                 <div className="grid md:grid-cols-3 gap-6">
                    <TournamentCard name="Spin Kenya Open" price={500} />
                  </div>
             </section>
    </div>
  );
}