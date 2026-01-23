import { ModalBox, ModalTitle, StyledTextField, ButtonContainer, ModalAlert } from "./LoginModal.styles";
import { Modal, Button } from "@mui/material"
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
                <ModalTitle id="modal-modal-title" variant="h5" component="h2">
                    Welcome Back
                </ModalTitle>
                
                {error && (
                    <ModalAlert severity="error">
                        {error}
                    </ModalAlert>
                )}
                
                <StyledTextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
                
                <ButtonContainer>
                    <Button variant="contained" fullWidth onClick={handleLogin} disabled={isLoading || !email}>
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>
                    <Button variant="outlined" fullWidth onClick={handleClose} disabled={isLoading}>
                        Cancel
                    </Button>
                </ButtonContainer>
            </ModalBox>
        </Modal>
    )
}
