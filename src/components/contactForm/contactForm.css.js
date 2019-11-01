import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  ${MEDIA.MIN_TABLET`
  width: 600px;`}

  label {
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    align-items: center;
    color: #777;
    ${MEDIA.MIN_TABLET`
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      paddding-top: 5px;
    `}
    span {
      margin-right: auto;
    }
    sup {
      font-size: 1.2rem;
      opacity: 0.7;
    }
    input,
    textarea {
      margin-left: 1rem;
      border: 1px solid #bbb;
      font-size: 1.8rem;
      line-height: 2rem;
      padding: 7px;
      width: 100%;
      max-width: 305px;
      border-radius: 3px;
    }
    .select-box {
      width: 100%;
      max-width: 320px;
    }
    textarea {
      min-height: 150px;
    }
  }
  .buttonBox {
    text-align: right;
    button {
      border: 1px solid #131d33;
      font-size: 1.8rem;
      line-height: 2rem;
      padding: 7px;
      border-radius: 5px;
      min-width: 200px;
      align-self: flex-end;
      margin-left: auto;
      background-color: #131d33;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #34699a;
      }
    }
  }
`;
export default FormContainer;
