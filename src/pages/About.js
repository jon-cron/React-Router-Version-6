import { Route, Routes } from "react-router-dom";

// nested routes
import Offers from "./Offers";

export default function About() {
  return (
    <div className="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>
      {/* NOTE here is an example of a nested path. This path extends from the about page. if the user was to click on the link the url would extent to be /about/offers */}
      {/* NOTE to use nested routes you must alter the path of the parent route in the App.js */}
      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>
    </div>
  );
}
