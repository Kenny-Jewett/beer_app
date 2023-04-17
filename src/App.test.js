import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test("check if page renders", () => {
  render(<App />);
  const searchElement = screen.getByText(/Search/i);
  expect(searchElement).toBeInTheDocument();
});

test("check that searchbar is rendering", () => {
  render(<App />);
  const searchBar = screen.getByPlaceholderText(/Search for beers/i);
  expect(searchBar).toBeInTheDocument();
});


test(`check if filters are rendering`, () => {
  render(<App />);
  const filter = screen.getAllByRole("filter");

  filter.forEach((filter) => {
    expect(filter).toBeInTheDocument();
  });
});

// test(`check if search is working`, () => {
//   render(<App />);
//   const searchBar = screen.getByRole(/searchbox/i);
//   userEvent.type(searchBar, "Pilsner");

//   const beerCard = screen.getAllByText(/pilsner/i);

//   beerCard.forEach(() => {
//     expect(beerCard).toBeInTheDocument();
//   });
// });





