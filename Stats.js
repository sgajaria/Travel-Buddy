export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding items to your list for your Trip 🧳</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are Ready to Fly ✈"
          : `💼You have ${numItems} Items on your list and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
