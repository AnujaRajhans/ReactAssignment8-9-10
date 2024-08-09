import React from "react";
import TemperatureConverter from "./components/TemperatureConverter/TemperatureConverter";
import TodoList from "./components/TodoList/TodoList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Card from "./components/Card/Card";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import Table from "./components/Table/Table";
import useFetch from "./components/hooks/useFetch";
import useLocalStorage from "./components/hooks/useLocalStorage";
import i from "./co.jpg"

const App = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { data, loading, error } = useFetch("https://api.example.com/data");


  const [storedValue, setStoredValue] = useLocalStorage(
    "myKey",
    "defaultValue"
  );

  const handleChange = () => {
    setStoredValue("newValue");
  };
  return (
    <div>
      <TemperatureConverter />
      <TodoList />
      <ShoppingCart />
      <Layout
        header={<h1>My Recipe Application</h1>}
        footer={<p>All rights reserved @ Anuja Rajhans</p>}
      >
        <Card
          title="Example Card"
          image={i}
          content="This is an example of a reusable card component."
          footer={
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
          }
        />

        <Table
          headers={["Name", "Age", "Location"]}
          data={[
            { Name: "John Doe", Age: 30, Location: "New York" },
            { Name: "Jane Smith", Age: 25, Location: "London" },
          ]}
        />

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is some modal content!</p>
        </Modal>
      </Layout>
      <div className="App">
        <h1>Custom Hooks Example</h1>

        <h2>useFetch Example</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

        <h2>useLocalStorage Example</h2>
        <p>Stored Value: {storedValue}</p>
        <button onClick={handleChange}>Change Value</button>
      </div>
    </div>
  );
};

export default App;
