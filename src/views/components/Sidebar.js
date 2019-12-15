import React from "react";
import axios from "axios";
import styled from "styled-components";
import { storageGet, storageSet } from "../../utils/LocalStorage";

const ModalOverlay = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  color: "#dedede";
  background-color: white;
`;

const StyledButton = styled.button`
  cursor: pointer;
  padding: 20px;
  text-align: left;
  border: none;
  width: 100%;
  font-size: 14px;
  background: #fff;
  border-bottom: 1px solid rgba(247, 202, 0, 0.24);
  :focus {
    outline: none;
    background-color: rgba(247, 202, 0, 0.24);
  }
  :hover {
    background-color: rgba(247, 202, 0, 0.24);
  }
`;

export default function Sidebar({ isOpen, closeSync }) {
  let requestBaseUrl = "https://vikbert-software.de/api/retinder.php";

  const handleDownload = event => {
    let retinderReduxData = storageGet("retinder");
    const token = storageGet("token");
    if (retinderReduxData) {
      retinderReduxData = JSON.parse(retinderReduxData);
      const requestUrl = requestBaseUrl + "?token=" + token;
      console.log("GET: " + requestUrl);

      axios
        .get(requestUrl)
        .then(function(response) {
          // handle success
          console.log("GET response:", response.data);
          storageSet("retinder", JSON.stringify(response.data));
        })
        .catch(function(error) {
          console.error(error);
        })
        .finally(function() {
          window.location.reload();
        });
    }
  };

  const handleUpload = event => {
    const requestBaseUrl = "https://vikbert-software.de/api/retinder.php";
    let token;
    const retinderObject = JSON.parse(storageGet("retinder"));
    token = storageGet("token");

    const postJsonData = {
      [token]: retinderObject
    };

    console.log("POST: ", requestBaseUrl);
    console.log("POST data: ", postJsonData);

    axios
      .post(requestBaseUrl, JSON.stringify(postJsonData))
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(() => {
        closeSync();
      });
  };

  return (
    isOpen && (
      <>
        <ModalOverlay onClick={closeSync}></ModalOverlay>
        <ModalWrapper>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li>
              <StyledButton onClick={handleDownload}>
                Herunterladen
              </StyledButton>
            </li>
            <li>
              <StyledButton onClick={handleUpload}>Hochladen</StyledButton>
            </li>
          </ul>
        </ModalWrapper>
      </>
    )
  );
}
