import React, { useState, useEffect } from "react";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import api from "../../../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const EditUserPage = ({ userId }) => {
    const history = useHistory();
    const [data, setData] = useState();
    const [qualities, setQualities] = useState({});
    const [professions, setProfession] = useState([]);
    const handleChange = (target) => {
        if (target.name === "profession") {
            setData((prevState) => ({
                ...prevState,
                [target.name]: Object.values(professions).filter(
                    (a) => a._id === target.value
                )[0]
            }));
        } else if (target.name === "qualities") {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value.map(
                    (b) =>
                        Object.values(qualities).filter(
                            (a) => a._id === b.value
                        )[0]
                )
            }));
        } else {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        api.users.update(userId, data);
        history.goBack();
    };
    useEffect(() => {
        api.users.getById(userId).then((data) => setData(data));
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);
    return (
        <>
            {data && (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 shadow p-4">
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Имя"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Электронная почта"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                />
                                <SelectField
                                    label="Выберите вашу профессию"
                                    onChange={handleChange}
                                    options={Object.values(professions).map(
                                        (profession) => {
                                            return {
                                                name: profession.name,
                                                value: profession._id
                                            };
                                        }
                                    )}
                                    defaultOption="Choose..."
                                    value={data.profession._id}
                                    name="profession"
                                />
                                <RadioField
                                    options={[
                                        { name: "Male", value: "male" },
                                        { name: "Female", value: "female" },
                                        { name: "Other", value: "other" }
                                    ]}
                                    value={data.sex}
                                    name="sex"
                                    onChange={handleChange}
                                    label="Выберите ваш пол"
                                />
                                <MultiSelectField
                                    options={qualities}
                                    onChange={handleChange}
                                    name="qualities"
                                    label="Выберите ваши качества"
                                    defaultValue={[
                                        ...data.qualities.map((quality) => {
                                            return {
                                                label: quality.name,
                                                value: quality._id
                                            };
                                        })
                                    ]}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mx-auto"
                                >
                                    Подтвердить
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

EditUserPage.propTypes = {
    userId: PropTypes.string
};

export default EditUserPage;
