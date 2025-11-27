// tests/App.test.tsx
import {fireEvent, render, screen} from '@testing-library/react'
import App from '../src/App'

describe('App Component', () => {
    it('should render the Vite and React logos', () => {
        render(<App/>)
        const viteLogo = screen.getByAltText('Vite logo')
        const reactLogo = screen.getByAltText('React logo')

        expect(viteLogo).toBeInTheDocument()
        expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vite.dev')

        expect(reactLogo).toBeInTheDocument()
        expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev')
    })

    it('should render the heading Vite + React', () => {
        render(<App/>)
        const heading = screen.getByRole('heading', {name: /Vite \+ React/i})
        expect(heading).toBeInTheDocument()
    })

    it('should render the button and update count on click', () => {
        render(<App/>)
        const button = screen.getByRole('button', {name: /count is 0/i})
        expect(button).toBeInTheDocument()

        fireEvent.click(button)
        expect(button).toHaveTextContent('count is 1')

        fireEvent.click(button)
        expect(button).toHaveTextContent('count is 2')
    })

    it('should render the instructions text', () => {
        render(<App/>)
        const instructionsText = screen.getByText(/Edit/)
        expect(instructionsText).toBeInTheDocument()
    })

    it('should render the "read the docs" paragraph', () => {
        render(<App/>)
        const readDocs = screen.getByText(/Click on the Vite and React logos to learn more/i)
        expect(readDocs).toBeInTheDocument()
    })
})
