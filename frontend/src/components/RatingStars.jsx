function RatingStars({ value }) {
  const note = Number(value) || 0;
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1">
      {stars.map((s) => (
        <span
          key={s}
          className={s <= note ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
      <span className="text-xs text-gray-600 ml-1">({note.toFixed(1)}/5)</span>
    </div>
  );
}

export default RatingStars;
