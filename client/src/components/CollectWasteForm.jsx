const CollectWasteForm = () => {
  return (
    <section>
      <main>
        <div>
          <form action="" className="flex flex-col">
            <label htmlFor="">Waste Name</label>
            <input type="text" />
            <label htmlFor="">Waste Type</label>
            <input type="text" />
            <label htmlFor="">condition</label>
            <input type="text" />
            <label htmlFor="">Pick up date</label>
            <input type="text" />
            <label htmlFor="">Location</label>
            <input type="text" />
            <label htmlFor="">waste image</label>
            <input type="image" />
          </form>
        </div>
      </main>
    </section>
  );
};

export default CollectWasteForm;
