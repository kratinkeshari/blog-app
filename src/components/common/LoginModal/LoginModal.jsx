import ModalBox from "./helperComponents/ModalBox";
import ModalTitle from "./helperComponents/ModalTitle";
import StyledTextField from "./helperComponents/StyledTextField";
import ButtonContainer from "./helperComponents/ButtonContainer";
import ModalAlert from "./helperComponents/ModalAlert";
import LoginButton from "./helperComponents/LoginButton";
import CancelButton from "./helperComponents/CancelButton";
import { Modal } from "@mui/material"
import { selectIsAuthenticated, selectUserLoading, selectUserError, loginWithEmail, clearError } from "../../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function LoginModal({ open, handleClose }) {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const isLoading = useSelector(selectUserLoading);
    const error = useSelector(selectUserError);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const handleLogin = () => {
        if (email) {
            dispatch(loginWithEmail(email));
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            handleClose();
            setEmail("");
        }
    }, [isAuthenticated, handleClose]);

    useEffect(() => {
        if (!open) {
            dispatch(clearError());
            setEmail("");
        }
    }, [open, dispatch]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBox>
                <ModalTitle id="modal-modal-title">
                    Welcome Back
                </ModalTitle>
                
                {error && (
                    <ModalAlert>
                        {error}
                    </ModalAlert>
                )}
                
                <StyledTextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
                
                <ButtonContainer>
                    <LoginButton onClick={handleLogin} disabled={isLoading || !email}>
                        {isLoading ? "Logging in..." : "Login"}
                    </LoginButton>
                    <CancelButton onClick={handleClose} disabled={isLoading}>
                        Cancel
                    </CancelButton>
                </ButtonContainer>
            </ModalBox>
        </Modal>
    )
}
