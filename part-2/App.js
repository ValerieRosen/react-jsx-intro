function App() {
  return (
    <div>
      <Tweet
        name="Jiminy Cricket"
        username="jiminy123"
        date={new Date().toDateString()}
        message="Let your conscience be your guide!"
      />
      <Tweet
        name="Pinocchio"
        username="realBoy123"
        date={new Date().toDateString()}
        message="Immarealboy"
      />
      <Tweet
        name="Barbie"
        username="barbieisqueen"
        date={new Date().toDateString()}
        message="Hi Barbie!"
      />
    </div>
  );
}
