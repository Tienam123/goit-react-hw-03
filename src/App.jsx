import ContactForm from "@/components/ContactForm/ContactForm.jsx";
import SearchBox from "@/components/SearchBox/SearchBox.jsx";
import ContactList from "@/components/ContactList/ContactList.jsx";
import Description from "@/components/Description/Description.jsx";
import contacts from '@/data/contacts.json'
import {useEffect, useState} from "react";
import {CONTACT_STORAGE_KEY} from "@/contansts/keys.js";
import Footer from "@/pages/Footer.jsx";
import Header from "@/pages/Header.jsx";

const App = () => {
    const [contactList, setContactList] = useState(JSON.parse(localStorage.getItem(CONTACT_STORAGE_KEY)) ?? contacts);
    const [filter, setFilter] = useState('')
    useEffect(() => {
        localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(contactList))
    }, [contactList]);
    const addToContacts = (contact) => {
        setContactList(prevState => [
            ...prevState,
            contact
        ])
    }
    const deleteFromContacts = (id) => {
        setContactList(prevState => {
            return prevState.filter(contact => contact.id !== id)
        })
    }
    const filteredArray = contactList.filter(contact => contact.name.toLowerCase()
        .includes(filter.toLowerCase()))
    return (
        <>
            <Header/>
            <div className='form__container mt-20 mx-auto flex'>
                <ContactForm addContact={addToContacts}/>
                <Description/>
            </div>
            <SearchBox filteredArray={setFilter}/>
            <ContactList contacts={filteredArray}
                         deleteContact={deleteFromContacts}
            />
            <Footer/>
        </>
    );
};
export default App;
