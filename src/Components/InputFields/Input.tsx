import '../Edit/edit.css';

interface Props {
    label: string;
    data: string;
    setData: React.Dispatch<React.SetStateAction<string>>;
    type?: string;
    inputType?: string;
    className?: string;
}

const Input = (props: Props) => {
    const { label, data, setData, type = 'text', inputType, className } = props;
    return (
        <>
            <label>{label}</label>
            {inputType === 'textarea' ? (
                <textarea
                    className={className}
                    placeholder={data}
                    onChange={(e) => setData(e.target.value)}
                />
            ) : (
                <input
                    type={type}
                    placeholder={data}
                    onChange={(e) => setData(e.target.value)}
                />
            )}
        </>
    );
};

export default Input;
