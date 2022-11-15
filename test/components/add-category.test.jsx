import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory />', () => {
  // const 
  const addCategory = jest.fn();
  const searchString = 'Programacion';
  // test 
  test('Debe cambiar el valor de la caja de texto', () => {
    render(<AddCategory addCategory= { addCategory } />)
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: searchString } });
    expect( input.value).toBe(searchString);
  });

  test('Debe llamar la funcion addCategory() se el input no es nulo', () => {
    render(<AddCategory addCategory= { addCategory } />)
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: searchString } })
    fireEvent.submit(form);
    expect(input.value).toBe(''); 
    // validar que la funcion haya sido llamada
    expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledWith(searchString);

  });

  test('No debe llamar a la funcion addCategory si el input es nulo', () => {
    render(<AddCategory addCategory= { addCategory } />)
    // const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    // fireEvent.input(input, { target: { value: '' } })
    fireEvent.submit(form);
    expect(addCategory).not.toHaveBeenCalled();
  });
});