import { getGifs } from "../../src/helppers/gifs.services";

describe('Pruebas en gif.services.js', () => {
  test('getGifs() debe de retornar un array con gifs', async() => {
    const gifs = await getGifs('cake');
    // console.log(gifs);
    // evaluar que el arreglo retornado no sea vacio
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id:expect.any(String),
      title:expect.any(String),
      url:expect.any(String),
    });
  });
});