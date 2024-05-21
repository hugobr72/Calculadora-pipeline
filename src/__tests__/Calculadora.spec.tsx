import { fireEvent, render, screen } from '@testing-library/react';
import Calculadora from '../components/Calculadora';
import * as  Calculo from '../components/Calculo';
import userEvent from '@testing-library/user-event'


function RenderPage() {

  const { container } = render(<Calculadora />);
  return container;

}

describe("Calculadora", () => {

  test('renderizar pagina calculadora', () => {
    RenderPage();
    const linkElement = screen.getByText("C");
    expect(linkElement).toBeInTheDocument();
  });

  // test('calculation', () => {
  //   expect(Calculo.Calcular('10 - 3')).toBe(7);
  // })

  test('clicar botão e alterar display', () => {
    const container = RenderPage();
    const buttonNumberOne = screen.getByRole('button', { name: "1" })
    userEvent.click(buttonNumberOne)
    const spanElement = container.querySelector('.display-number')

    // Verifica se o conteúdo do span mudou corretamente
    expect(spanElement).toHaveTextContent('1');

    // Simula clique no botão de limpar
    fireEvent.click(screen.getByText('C'));

    // Verifica se o conteúdo do span foi limpo
    expect(spanElement).toBeEmptyDOMElement();
  })

});
