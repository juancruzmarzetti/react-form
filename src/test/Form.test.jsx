import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Form from "../components/Form";

describe("Testing form inputs and buttons", () => {
    test("Should receive numbers as text", () => {
        const testHandleChangeName = vi.fn();
        render(<Form testHandleChangeName={testHandleChangeName}/>);
        const input = screen.getByTestId("input-test-text");
        fireEvent.change(input, { target: { value: '12' } });

        expect(testHandleChangeName).toHaveBeenCalledWith('12');
        expect(typeof testHandleChangeName.mock.calls[0][0]).toBe('string');
    });

    test("The button´s onClick event should fire", () => {
        const testHandleOnClick = vi.fn();
        render(<Form testHandleOnClick={testHandleOnClick}/>);
        const btn = screen.getByTestId("button-submit-onclick-test");
        fireEvent.click(btn);
        expect(testHandleOnClick).toBeCalledTimes(1);
    });
})