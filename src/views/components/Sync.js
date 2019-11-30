import React from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { storageGet, storageSet } from "../../utils/LocalStorage";
import { ControlFooter } from "../components/StyledComponents";
import ReloadIconAnimation from "./svg/ReloadAnimationIcon";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.3);
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  max-width: 100%;
  height: 160px;
  max-height: 100%;

  position: fixed;
  z-index: 100;
  left: 50%;
  right: 50%;
  top: 35%;

  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0 6 1px rbga(0, 0, 0, 9);

  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -khtml-border-radius: 5px;
`;

const itemStyled = css`
  width: 50%;
  text-align: center;
  padding: 12px 8px;
`;
const CancelButton = styled.div`
  color: #cf9707;
  ${itemStyled}
`;
const SaveButton = styled.div`
  ${itemStyled}
  border-left: 1px solid #dedede;
  color: #cf9707;
`;
const Content = styled.div`
  text-align: center;
  padding: 10px;
`;
const Text = styled.div`
  margin-bottom: 10px;
`;

export default function Sync({ isOpen, closeSync }) {
  let requestBaseUrl = "https://vikbert-software.de/api/retinder.php";
  const [loading, setLoading] = React.useState(false);

  const handleDownload = event => {
    setLoading(true);
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
          setLoading(false);
          window.location.reload();
        });
    }
  };

  const handleUpload = event => {
    setLoading(true);
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
        setLoading(false);
        closeSync();
      });
  };

  return (
    isOpen && (
      <>
        <ModalOverlay></ModalOverlay>
        <ModalWrapper>
          <Content>
            <Text>wähle die Option aus, um die Daten zu synchronisieren</Text>
            {loading && <ReloadIconAnimation />}
          </Content>
          <ControlFooter>
            <CancelButton onClick={handleDownload}>Herunterladen</CancelButton>
            <SaveButton onClick={handleUpload}>Hochladen</SaveButton>
          </ControlFooter>
        </ModalWrapper>
      </>
    )
  );
}
