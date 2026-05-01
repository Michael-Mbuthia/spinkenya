export default function TournamentCard({ name, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h3 className="center text-xl font-bold mb-2">{name}</h3>

      <p className="text-gray-600 mb-4">Entry Fee</p>

      <p className="text-blue-600 font-bold text-lg mb-4">
        KES {price}
      </p>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Buy Ticket
      </button>
    </div>
  );
}