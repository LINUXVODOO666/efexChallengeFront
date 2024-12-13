import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppInput from "./app-autocorrect-text-area";
import { dictionary } from "../../utilities/constants";

const testIds = {
    input: 'textarea',
};

const renderApp = (dictionary: any) => render(<AppInput dictionary={dictionary} />);

beforeEach(() => {});

afterEach(() => {
    cleanup();
});

test('TEST 1: Single word auto-correction', () => {
    const { getByTestId } = renderApp(dictionary);
    const input = getByTestId(testIds.input);
    const incorrectWords = Object.getOwnPropertyNames(dictionary);

    // The input value should remain the same as no space is entered
    fireEvent.input(input, { target: { value: incorrectWords[0] } });
    expect(input).toHaveValue(incorrectWords[0]);

    // Add a space to trigger the autocomplete function
    fireEvent.input(input, { target: { value: ' ' } });
    const expected_word_0 = dictionary[incorrectWords[0] as keyof typeof dictionary]

    expect(input).toHaveValue(expected_word_0 + ' ');
});

test('TEST 2: Multiple words auto-correction', () => {
    const { getByTestId } = renderApp(dictionary);
    const input = getByTestId(testIds.input);
    const incorrectWords = Object.getOwnPropertyNames(dictionary);

    // The input value should be the same before entering a space
    fireEvent.input(input, { target: { value: incorrectWords[0] + ' ' + incorrectWords[1] } });
    expect(input).toHaveValue(incorrectWords[0] + ' ' + incorrectWords[1]);

    // Add a space to trigger the autocomplete function for both words
    fireEvent.input(input, { target: { value: ' ' } });

    const expected_word_0 = dictionary[incorrectWords[0] as keyof typeof dictionary]
    const expected_word_1 = dictionary[incorrectWords[1] as keyof typeof dictionary]

    expect(input).toHaveValue(expected_word_0 + ' ' + expected_word_1 + ' ');
});
