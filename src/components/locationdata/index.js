import React, { Fragment, useEffect, useState } from 'react';
import Location from '../../icons/location';
import PincodeData from "../../data/pincode.json"
import LocationSearch from '../../icons/pincode';
import NotFoundImg from '../../assets/images/notfound.webp';
import styles from './style.module.css';

const LocationData = () => {
    const [openDataBar, setOpenDataBar] = useState(false);
    const [search, setSearch] = useState("");
    const [filterdItem, setFilteredItem] = useState([]);

    const handleToggle = () => {
        setOpenDataBar(!openDataBar);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const FilterItem = (query) => {
        const FilterData = PincodeData.filter((pincode) => {
            return pincode.pincode.includes(query) || pincode.area.includes(query)
        })
        setFilteredItem(FilterData);
    }

    const Debounce = (func, delay) => {
        let TimeoutId;
        return (...argument) => {
            clearTimeout(TimeoutId)
            setTimeout(() => func(...argument), delay)
        }
    }

    const DebouncedItem = Debounce(FilterItem, 300)

    useEffect(() => {
        DebouncedItem(search)
    }, [search]
    )

    return (
        <Fragment>
            <div className={styles.delivery} >
                <div className={styles.delivery} onClick={handleToggle} >
                    <div className={styles.icon}>
                        <Location />
                    </div>
                    <div className={styles.d_address}>
                        Deliver to <br /> <span>all</span>
                    </div>
                </div>
                {openDataBar &&
                    <div className={styles.location_dropdown}>
                        <input type={"text"} placeholder='Enter Your Location' onChange={handleSearch} />
                        <button >X</button>
                        <div className={styles.location_list}>
                            {search.length == 0 &&
                                <div className={styles.empty}>
                                    <LocationSearch /></div>
                            }
                            {filterdItem.length == 0 &&
                                <div className={styles.notfound}>
                                    <span>Location Not Found</span>
                                    <img src={NotFoundImg} alt="" /></div>
                            }
                            {filterdItem.length > 0 && search.length > 0 &&
                                <> {
                                    filterdItem.map((item, i) => (
                                        <div className={styles.Location} key={i} >{item.area} - {item.pincode}</div>
                                    ))
                                }
                                </>
                            }
                        </div>
                    </div>
                }
            </div>
        </Fragment>
    );
}

export default LocationData;