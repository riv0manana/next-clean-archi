import { vi } from "vitest";
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import UserForm from "@/app/components/molecules/UserForm.tsx/UserForm";

import { UserModel } from "@/core/domain/models/user.model";
import { doSignUp } from "@/app/actions/user.actions";

describe('UserForm: Create / Update', () => {
    let user: UserModel | undefined;
    const onSubmit = vi.fn(doSignUp);
    const callback = vi.fn((res?: UserModel) => user = res);

    it('Should render the form', () => {
        const { container } = render(<UserForm submit={onSubmit} />)
        expect(container.querySelector('input[name="name"]')).toBeInTheDocument()
        expect(container.querySelector('input[name="email"]')).toBeInTheDocument()
        expect(container.querySelector('input[name="phone"]')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: "Submit"})).toBeInTheDocument()
    })

    it('Submit should be disabled by default', () => {
        const { container } = render(<UserForm submit={onSubmit} />)
        const btn = container.querySelector('button[type="submit"]');
        expect(btn).toHaveAttribute('disabled')
    })

    it('Should not submit on missing value', async () => {
        const { container } = render(<UserForm submit={onSubmit} />)
        const btn = container.querySelector('button[type="submit"]');
        const event = userEvent.setup();

        await event.type(container.querySelector('input[name="email"]')!, 'fdsf');
        await event.type(container.querySelector('input[name="name"]')!, 'John Doe');
        await event.type(container.querySelector('input[name="email"]')!, '03200000000');
        await event.click(btn!)
        expect(await screen.getByText('user.model.email.invalid')).toBeInTheDocument();
        expect(btn).toHaveAttribute('disabled');
    })

    it('Should submit on valid value', async () => {
        const { container } = render(<UserForm submit={onSubmit} callback={callback} />)
        const btn = container.querySelector('button[type="submit"]');
        const event = userEvent.setup();
        await event.type(container.querySelector('input[name="email"]')!, 'john.doe@email.xxx');
        await event.type(container.querySelector('input[name="name"]')!, 'John Doe');
        await event.type(container.querySelector('input[name="phone"]')!, '0320000000');
        await event.click(btn!)

        await expect(onSubmit).toHaveBeenCalled()
        await expect(callback).toHaveBeenCalled()
        await expect(user).toBeDefined()
        await expect(user?.email).toEqual('john.doe@email.xxx')
    })
})