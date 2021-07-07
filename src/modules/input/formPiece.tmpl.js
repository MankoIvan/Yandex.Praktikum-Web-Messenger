const formPieceTmpl = `
    <div class="form-piece">
        <label class="form-piece__label" for={{name}}>{{label}}</label>
        <input class="form-piece__input" type={{type}} id={{name}} name={{name}}>
        <p class="form-piece__error">{{message}}</p>
    </div>
`;
export { formPieceTmpl };