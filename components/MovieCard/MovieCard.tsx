type MovieCardProps = {};

const MovieCard: React.VFC<MovieCardProps> = (props) => {
  return (
    <>
      {/* Normal State */}
      <div className="w-full h-full aspect-video overflow-hidden rounded-sm">
        <img
          src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76"
          alt=""
          className="w-full object-cover aspect-video"
        />
      </div>
      {/* Hover State */}
    </>
  );
};

export default MovieCard;
