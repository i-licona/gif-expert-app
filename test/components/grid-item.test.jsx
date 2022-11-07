import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/grid-item";

describe('Pruebas en <GifItem>', () => {
  /* const */
  const title = 'Cake';
  const url = 'https://cake.com/cake.jpg';
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={ title } url ={ url } />);
    expect(container).toMatchSnapshot();
  });
  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={ title } url ={ url } />);
    // screen.debug();
    expect( screen.getByRole('img').src).toBe(url);
  });
});