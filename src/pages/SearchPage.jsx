import { useState, useEffect } from "react"
import axios from "axios";
const SearchPage = () => {

    const [listCar, setListCar] = useState();
    const [tipeCar, setTipeCar] = useState();
    const [tanggalRental, setTanggalRental] = useState();

    const getAllDataCar = async () => {
        const { data } = await axios("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");

        setListCar(data);
    }

    const searchCar = () => {
        const resultSearch = listCar?.filter((car) => {
            return car.type == tipeCar
        })
        setListCar(resultSearch);
    } 
    useEffect(() => {
        getAllDataCar();
    }, [])
    return (
        <>
            <h1>Cari mobil</h1>
            <select id="tipe" onChange={(event) => setTipeCar(event.target.value)}>
                <option value="Sedan">Sedan</option>
                <option value="Convertible">Convertible</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
            </select>
            <input type="date" id="tanggal" onChange={(event) => setTanggalRental(event.target.value)} />
            <button onClick={searchCar}>Search</button>
            <br/>
            {listCar?.map((car) => {
                return (
                    <div>
                        <h1>{car.model}</h1>
                        <p>{car.type}</p>
                        <img src="" alt="" />
                    </div>
                )
            })}
        </>
    )
}

export default SearchPage;