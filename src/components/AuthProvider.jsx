import {useState, useMemo } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');

    const value = useMemo(() => ({ token, setToken }), [token, setToken]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};