import { Star } from "lucide-react";

const Rating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={20}
          className={
            star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
};

export default Rating;
