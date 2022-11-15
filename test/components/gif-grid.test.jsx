import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/gif-grid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs'; 

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
  const category = 'Dragon Ball';
  test('Debe mostrar el loadding inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images:[],
      isLoadding:true,
    });
    render(<GifGrid category={ category } />);
    screen.debug();
    expect(screen.getAllByText('Cargando...'));
    expect(screen.getAllByText(category));
  });
  // debe de mostrar items, cuando se cargan las imagenes, mediante el useFetchGifs
  test('Debe de mostrar items mediante el useFetch', () => {
    useFetchGifs.mockReturnValue({
      images:[
        {
          id:'ABC',
          title:'Dragon Ball Z',
          url: 'http://www.banana.cx'
        },   
        {
          id:'123',
          title:'Goku',
          url: 'http://www.banana2.cx'
        }        
      ],
      isLoadding:false,
    });
    render(<GifGrid category={ category } />);
    screen.debug();       
  });
});