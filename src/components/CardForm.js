import React, {useState} from 'react';

const CardForm = ({closeModal = null}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'bash',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const cards = JSON.parse(window.localStorage.getItem('cards')) || [];
        window.localStorage.setItem('cards', JSON.stringify([formData, ...cards]));
        
        closeModal();
    };

    const handleChange = (e) => {
        const newData = {...formData};
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    };
    return (
        <form className="box is-fullwidth" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor={'category'} className="label has-text-left">Category</label>
                <div className="control is-expanded">
                    <div className="select is-primary is-fullwidth">
                        <select name={'category'} onChange={handleChange} required>
                            <option value="" disabled>Choose Category</option>
                            <option value="bash">Bash</option>
                            <option value="bulma">Bulma</option>
                            <option value="git">Git & GitHub</option>
                            <option value="js">JavaScript</option>
                            <option value="material">Material UI</option>
                            <option value="php">PHP & Symfony</option>
                            <option value="react">react</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label htmlFor={'title'} className="label has-text-left">Title</label>
                <div className="control is-primary">
                    <input type="text"
                           name={'title'}
                           className="input is-primary"
                           required
                           onChange={handleChange}/>
                </div>
            </div>
            <div className="field">
                <label htmlFor="description" className="label has-text-left">Description</label>
                <div className="control">
                    <textarea className="textarea is-primary"
                              name={'description'}
                              required
                              onChange={handleChange}
                              rows={3}
                              placeholder={'Card description'}/>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button  is-success is-right" type="submit">
                        Submit
                    </button>
                </div>
                <div className="control">
                    <button className="button is-light is-danger" onClick={closeModal}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CardForm;
