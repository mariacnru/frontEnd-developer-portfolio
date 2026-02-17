function PhilosophyCard({ content, img }) {
  return (
    <div className="PhilosophyCard">
      <img src={img} alt="" width={50} />
      <p className="">{content}</p>
    </div>
  );
}

export default PhilosophyCard;
