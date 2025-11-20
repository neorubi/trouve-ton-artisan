function RatingStars({ value }) {
  const stars = [];
  const rounded = Math.round(value);

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={
          i <= rounded ? "text-yellow-400" : "text-blue-200"
        }
      >
        ★
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1">
      {stars} <span className="text-xs text-[#384050]">{value.toFixed(1)}</span>
    </span>
  );
}

export default RatingStars;
