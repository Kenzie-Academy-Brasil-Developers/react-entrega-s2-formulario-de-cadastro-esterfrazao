import { FormRegister, Error } from "./styles";
import { StyledButton } from "../../App";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();

  const mySchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome Obrigatório!")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Nome Inválido"),
    email: yup.string().required("Email Obrigatório!").email("Email Inválido"),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/,
        "Sua senha deve ter mais de 8 digitos que utilize números, símbolos e letras minúsculas"
      ),
    checkPassword: yup
      .string()
      .required("Senha Obrigatória!")
      .oneOf([yup.ref("password"), null], "As senhas diferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mySchema),
  });

  const onSubmitFunction = (data) => {
    history.push(`/home/${data.name}`);
  };

  return (
    <FormRegister onSubmit={handleSubmit(onSubmitFunction)}>
      <div>
        <input {...register("name")} type="text" placeholder="Nome" />
        <Error>{errors.name?.message}</Error>
      </div>

      <div>
        <input {...register("email")} type="text" placeholder="Email" />
        <Error>{errors.email?.message}</Error>
      </div>

      <div>
        <input {...register("password")} type="password" placeholder="Senha" />
        <Error>{errors.password?.message}</Error>
      </div>

      <div>
        <input
          {...register("checkPassword")}
          type="password"
          placeholder="Confirmar Senha"
        />
        <Error>{errors.checkPassword?.message}</Error>
      </div>

      <StyledButton type="submit">Cadastrar</StyledButton>
    </FormRegister>
  );
};

export default Form;
