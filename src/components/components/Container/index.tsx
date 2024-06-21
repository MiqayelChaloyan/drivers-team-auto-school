type Props = {
    children: string | JSX.Element | JSX.Element[],
}

export default function Container({ children }: Props) {
    return <div className="container mx-auto">{children}</div>;
};