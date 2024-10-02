import React, { useState } from 'react';
import DropDown from '../../icons/dropdown';
import styles from './style.module.css';

const Select = ({ options, keyName, placeholder, defaultValue, onSelect, customCss, sale }) => {
    const [isopen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue || null);

    const handleToggle = () => {
        setIsOpen(!isopen);
    }
    const handleChange = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    }
    return (
        <div className={styles.custom_select}>
            <div className={` ${styles.cs_label} ${customCss}  `} onClick={handleToggle} >
                {selectedOption ? selectedOption[keyName] : placeholder}
                {sale && <span className={styles.sale}>Sale</span>}
                <DropDown />
            </div>

            {isopen &&
                <div className={styles.cs_options}>
                    {options.map((option, i) =>
                        <div className={styles.cs_option} key={i} onClick={() => { handleChange(option) }}>{option[keyName]}</div>
                    )}
                </div>
            }
        </div>
    );
}

export default Select;