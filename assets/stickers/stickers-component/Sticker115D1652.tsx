import * as React from "react";
import { useContext } from "react";
import { StickerScaleContext } from "@components/context/sticker-scale-context";
import Svg, { SvgProps, Path } from "react-native-svg";

// Viewbox
// width: 59
// height: 68
function Sticker115D1652(props: SvgProps) {
  const stickerScale = useContext(StickerScaleContext);
  return (
    <Svg
      width={59 * stickerScale}
      height={68 * stickerScale}
      fill="none"
      {...props}
      viewBox="0 0 59 68"
    >
      <Path
        d="M16.032 68c-.237 0-.474-.016-.707-.046l.037-.304c.28.038.572.051.851.042l.012.304c-.065.002-.129.004-.193.004zm1.088-.106l-.055-.3c.275-.053.556-.128.83-.223l.093.29a6.43 6.43 0 01-.868.233zm-2.276-.026a5.287 5.287 0 01-.861-.27l.107-.285c.261.107.537.194.817.256l-.063.299zm3.976-.554l-.124-.276c.327-.16.59-.32.762-.426l.15.263c-.177.11-.45.274-.788.439zm-5.645-.133a5.295 5.295 0 01-.73-.552l.192-.232c.213.195.445.37.69.523l-.152.261zm7.191-.747l-.132-.271c.25-.134.52-.263.805-.39l.114.28c-.279.125-.543.253-.787.381zm-8.551-.478a5.718 5.718 0 01-.514-.772l.252-.154c.146.259.308.504.487.73l-.225.195zm10.15-.24l-.104-.285c.26-.102.542-.204.834-.305l.093.29c-.29.1-.567.202-.824.3zm1.657-.575l-.085-.293c.28-.087.56-.172.847-.256l.078.294c-.283.084-.563.168-.84.255zm1.688-.496l-.075-.294c.282-.078.566-.156.85-.232l.074.296c-.285.075-.568.153-.85.23zm-14.4-.306a6.1 6.1 0 01-.261-.898l.285-.067c.063.291.145.58.248.853l-.272.112zm16.1-.15l-.072-.295.851-.224.073.296-.852.224zm1.703-.45l-.072-.294c.283-.077.566-.155.847-.234l.078.295c-.285.078-.57.157-.853.233zm1.7-.477l-.079-.295c.28-.081.56-.166.841-.254l.084.291c-.28.09-.562.175-.846.258zm1.688-.531l-.09-.291c.283-.096.562-.196.827-.295l.098.29c-.268.097-.55.199-.835.296zm-21.577-.218a7.116 7.116 0 01-.005-.934l.291.018a9.593 9.593 0 00-.011.42c0 .16.005.32.016.476l-.291.02zm23.238-.4l-.107-.285c.275-.113.547-.229.807-.347l.117.28c-.264.12-.538.237-.817.352zm1.621-.737l-.128-.275c.13-.066.26-.134.386-.202l.391-.213.137.27c-.13.071-.26.143-.393.214-.13.07-.262.14-.393.206zm-24.48-.674l-.289-.047c.044-.29.101-.595.172-.91l.285.07c-.07.308-.125.604-.167.887zm26.043-.178l-.14-.268c.26-.148.514-.294.766-.44l.145.266c-.254.147-.51.295-.771.442zm1.537-.894l-.147-.265c.256-.153.508-.308.755-.463l.151.263c-.249.155-.503.31-.76.465zm-27.188-.692l-.282-.085c.078-.273.165-.56.267-.88l.277.097c-.1.314-.186.6-.262.868zm28.7-.25l-.155-.26c.251-.162.5-.323.742-.486l.157.257c-.245.165-.493.326-.745.488zm1.48-.992l-.16-.253c.244-.17.487-.341.722-.514l.167.25c-.239.174-.48.345-.728.517zm-29.631-.487l-.276-.104c.074-.218.15-.436.227-.656l.07-.205.276.103-.07.203-.227.66zm31.08-.561l-.173-.247c.239-.18.473-.362.704-.545l.177.245c-.233.182-.467.366-.708.547zm1.404-1.112l-.183-.238c.23-.19.457-.384.677-.576l.188.234c-.221.195-.45.39-.682.58zm-31.912-.086l-.29-.052c.048-.274.078-.573.093-.89l.293.015a8.398 8.398 0 01-.096.927zm33.265-1.09l-.193-.231c.22-.2.438-.406.647-.611l.201.223c-.212.207-.433.415-.655.618zm-33.464-.753a8.792 8.792 0 00-.088-.895l.29-.045c.044.295.074.607.09.926l-.292.014zm34.757-.5l-.206-.217c.208-.214.415-.432.614-.648l.21.21c-.2.219-.409.44-.618.655zm-35.032-1.271a17.736 17.736 0 00-.252-.868l.279-.096c.095.297.18.596.256.882l-.283.082zm36.253-.058l-.218-.204c.195-.224.387-.455.574-.686l.224.196a27.74 27.74 0 01-.58.694zm1.138-1.407l-.23-.189c.18-.237.356-.48.528-.725l.237.181c-.174.247-.355.494-.535.733zm-37.936-.26a27.2 27.2 0 00-.326-.84l.268-.121c.118.288.23.576.33.854l-.272.108zm38.98-1.223l-.24-.172c.166-.25.329-.505.49-.757l.244.17c-.163.254-.328.507-.494.759zm-39.665-.45a29.808 29.808 0 00-.382-.82l.262-.136c.135.28.265.559.385.827l-.265.13zm40.638-1.077l-.245-.167c.158-.254.313-.513.467-.77l.248.16c-.154.26-.311.519-.47.777zm-41.423-.553c-.139-.27-.28-.537-.42-.8l.256-.15c.143.264.284.534.422.807l-.258.142zM52.279 45.8l-.251-.158c.149-.26.298-.522.442-.786l.255.152c-.147.266-.297.53-.446.792zm-43.205-.587c-.106-.192-.211-.378-.316-.565l-.126-.225.253-.155.125.224c.106.186.21.376.318.566l-.254.154zm44.083-1.002l-.255-.148c.142-.265.281-.534.419-.802l.258.145c-.139.269-.28.538-.422.805zm-44.965-.583a87.307 87.307 0 01-.43-.8l.256-.15c.14.267.283.532.43.798l-.256.152zm45.795-1.035l-.262-.139c.134-.271.264-.542.394-.814l.263.135c-.13.273-.262.547-.395.819zm-46.646-.57c-.14-.269-.281-.538-.418-.806l.258-.144c.138.267.278.535.416.804l-.256.146zm47.422-1.072l-.264-.132c.125-.276.247-.55.368-.827l.265.125a40.95 40.95 0 01-.368.834zm-48.252-.544l-.412-.81.26-.143.41.81-.258.143zm48.977-1.128l-.27-.121c.116-.28.231-.562.34-.841l.271.115c-.11.283-.226.564-.341.847zM5.69 38.787l-.41-.81.257-.143c.138.27.277.54.413.81l-.26.143zm50.464-1.209l-.273-.11c.107-.285.21-.57.31-.854l.275.105c-.1.287-.204.573-.312.86zm-51.289-.407c-.137-.27-.278-.536-.417-.803l.257-.147c.14.266.281.535.419.805l-.259.145zm51.897-1.316l-.277-.1c.096-.29.19-.577.278-.866l.28.093c-.092.291-.184.582-.281.873zm-52.741-.287l-.103-.186c-.109-.202-.217-.407-.326-.616l.259-.145c.106.207.213.411.322.61l.104.189-.256.148zm53.284-1.461l-.28-.09c.083-.291.164-.583.243-.875l.282.082c-.079.293-.16.588-.245.883zm-54.117-.16a28.33 28.33 0 01-.381-.83l.264-.126c.123.273.25.551.379.82l-.262.136zm54.59-1.611l-.283-.074c.071-.296.14-.595.206-.887l.284.069c-.065.294-.136.595-.207.892zm-55.332-.058c-.115-.28-.228-.566-.335-.85l.273-.113c.106.28.218.565.331.842l-.269.121zm-.649-1.71c-.102-.29-.199-.58-.291-.87l.278-.096c.091.287.187.574.287.861l-.274.104zm56.378-.022l-.288-.063c.06-.3.115-.6.166-.895l.287.055c-.052.297-.106.6-.165.903zM1.239 28.823a34.294 34.294 0 01-.243-.883l.282-.08c.076.29.158.583.241.875l-.28.088zm57.248-.088l-.29-.046c.044-.299.085-.603.121-.901l.29.038c-.035.3-.076.607-.121.91zM.777 27.047c-.07-.296-.135-.6-.195-.896l.286-.063c.06.295.125.594.193.889l-.285.07zm57.932-.136l-.292-.03c.03-.3.054-.606.075-.908l.292.023c-.02.303-.047.611-.075.915zM.414 25.248c-.051-.302-.1-.61-.141-.909l.29-.044c.041.297.088.6.14.899l-.29.054zm58.421-.17l-.292-.015c.014-.303.022-.61.026-.91l.292.005a30.55 30.55 0 01-.026.92zM.16 23.425a24.33 24.33 0 01-.084-.916l.292-.023c.023.298.05.604.082.905l-.29.034zm58.41-.183c-.004-.302-.013-.609-.026-.91l.293-.015c.013.304.022.615.026.921l-.294.005zM.022 21.59c-.015-.305-.02-.616-.023-.92l.293-.003c.003.3.01.607.022.91l-.292.013zm58.468-.166c-.024-.304-.053-.61-.084-.905l.292-.034c.03.3.059.608.083.916l-.29.023zM.304 19.758l-.292-.01c.009-.306.023-.615.044-.92l.292.023c-.02.298-.035.605-.044.907zm57.99-.142a24.3 24.3 0 00-.145-.897l.287-.056c.054.297.103.603.148.908l-.29.045zM.426 17.945l-.29-.034c.032-.307.071-.613.116-.914l.29.047c-.043.295-.084.6-.116.9zm57.546-.115a25.711 25.711 0 00-.211-.882l.282-.08c.076.293.15.594.215.893l-.286.069zM.695 16.149l-.288-.06c.059-.302.123-.604.195-.899l.285.073c-.072.29-.135.588-.192.886zm56.819-.074c-.089-.29-.183-.58-.282-.86l.276-.105c.1.286.196.578.285.872l-.279.093zm-56.4-1.688l-.28-.086c.085-.295.176-.59.276-.878l.275.1c-.096.284-.186.575-.27.864zm55.8-.018c-.112-.28-.233-.559-.356-.83l.265-.13c.125.274.247.559.362.842l-.271.118zm-.75-1.64c-.136-.264-.28-.53-.43-.787l.25-.159c.153.262.3.53.44.801l-.26.146zm-54.47-.052l-.27-.115c.11-.286.232-.57.355-.846l.265.13c-.122.271-.24.552-.35.83zm53.572-1.499a18.72 18.72 0 00-.508-.737l.236-.184c.175.245.35.497.513.75l-.241.171zm-52.832-.143l-.258-.143c.138-.27.284-.541.436-.804l.25.158c-.148.258-.292.523-.428.789zm51.782-1.303c-.187-.23-.38-.457-.58-.678l.215-.208c.199.225.399.457.587.692l-.223.194zM3.328 9.477l-.243-.168c.163-.256.331-.512.504-.758l.237.182a20.6 20.6 0 00-.498.744zm49.696-1.069a19.625 19.625 0 00-.643-.611l.192-.231c.224.203.444.411.654.623l-.203.22zM4.357 8.01l-.23-.192c.184-.24.375-.476.569-.706l.222.2a18.4 18.4 0 00-.561.698zm31.08-.053l-.087-.143c-.133-.22-.27-.436-.409-.645l.24-.173c.14.21.281.43.417.656l-.015.008.083.113-.23.184zm.935-.717l-.165-.25c.244-.174.495-.345.743-.505l.152.261c-.244.155-.49.321-.73.494zm15.335-.018a9.267 9.267 0 00-.226-.18 12.14 12.14 0 00-.474-.358l.166-.25c.16.114.324.24.483.363l.232.185-.181.24zm-46.202-.58l-.21-.21c.202-.222.413-.44.626-.651l.2.22a19.53 19.53 0 00-.616.64zm28.92-.201c-.173-.228-.351-.45-.532-.66l-.028-.033.219-.203.027.032c.186.216.368.443.543.676l-.23.188zm3.43-.152l-.14-.267c.261-.149.527-.291.79-.421l.126.275c-.259.127-.52.267-.776.413zm12.42-.092a13.047 13.047 0 00-.761-.435l.132-.271c.264.138.525.288.78.445l-.15.26zm-10.849-.688l-.11-.284c.274-.116.553-.226.83-.325l.095.291c-.272.096-.545.201-.815.318zm-32.66-.12l-.192-.231c.22-.2.45-.398.68-.59l.183.24c-.228.188-.452.383-.671.582zm41.96-.005c-.267-.113-.54-.22-.813-.313l.093-.291c.28.097.56.205.834.324l-.114.28zm-15.463-.286a14.03 14.03 0 00-.645-.607l.188-.234c.228.2.45.408.661.62l-.204.22zm7.809-.172l-.077-.295c.287-.08.579-.152.865-.212l.059.3c-.283.058-.567.128-.847.207zm6.008-.108c-.122-.03-.243-.061-.366-.088a13.227 13.227 0 00-.484-.1l.049-.298a9.375 9.375 0 01.87.191l-.07.295zm-4.305-.248l-.038-.302c.295-.041.592-.068.886-.086l.017.303c-.289.018-.578.046-.865.085zm2.597-.055a11.511 11.511 0 00-.865-.05l.005-.303c.295.005.593.022.887.05l-.027.303zM8.131 4.258l-.171-.246c.237-.18.481-.356.728-.523l.16.254c-.241.165-.484.338-.717.515zm23.803-.326a15.489 15.489 0 00-.717-.512l.158-.256c.248.167.495.343.73.522l-.171.246zM9.587 3.26l-.151-.262c.252-.158.513-.31.77-.454l.14.268c-.254.143-.511.293-.759.448zm20.885-.308c-.251-.147-.51-.29-.77-.424l.13-.274c.265.138.53.283.784.43l-.144.268zm-19.348-.551l-.127-.275c.264-.134.536-.26.804-.382l.116.281a17.64 17.64 0 00-.793.376zm17.786-.25a17.5 17.5 0 00-.807-.34l.102-.286c.279.108.554.224.822.343l-.117.283zm-16.184-.466l-.103-.286c.273-.107.552-.21.833-.307l.092.291a18.58 18.58 0 00-.822.302zm14.555-.175a24.186 24.186 0 00-.835-.262l.077-.295c.285.084.57.174.847.268l-.09.29zm-12.898-.394l-.08-.293c.283-.082.57-.16.856-.231l.066.296c-.282.07-.565.148-.842.228zm11.217-.1c-.19-.046-.383-.092-.578-.135-.09-.021-.182-.04-.276-.061l.06-.3c.093.022.187.041.277.063.197.044.393.09.586.14l-.069.293zM16.08.7l-.055-.298c.288-.059.582-.111.872-.156l.043.301c-.287.046-.576.096-.86.153zm7.81-.046c-.073-.013-.146-.027-.22-.038-.214-.037-.429-.071-.643-.101l.038-.302c.218.029.436.064.651.102l.224.038-.05.3zM17.803.43l-.03-.302c.288-.033.586-.06.88-.08l.02.305c-.292.018-.584.046-.87.077zM22.16.409c-.29-.029-.583-.052-.87-.068l.018-.305c.29.017.586.04.881.07l-.029.303zM19.545.314l-.007-.305c.293-.009.587-.011.884-.007l-.005.305a19.436 19.436 0 00-.872.007z"
        fill="#fff"
      />
      <Path
        d="M15.34 65.48c-.883-.198-1.61-.762-2.05-1.588-.892-1.68-.298-3.71.71-6.618.142-.41.335-.972.377-1.145.265-1.275.257-2.923-.021-4.303-.674-3.03-2.187-5.955-3.578-8.417-.975-1.725-1.86-3.478-2.716-5.175-.677-1.341-1.377-2.73-2.105-4.061C2.68 28.153.381 18.523 4.704 11.2c1.923-3.256 4.725-5.763 8.102-7.25 3.252-1.43 6.894-1.856 10.528-1.23.43.073.852.158 1.256.248 3.408.766 6.023 2.19 7.775 4.234 1.056 1.233 1.863 2.727 2.472 4.182 3.066-3.277 7.194-5.522 11.445-4.569 1.401.315 2.734.964 3.965 1.93 2.912 2.286 4.84 5.512 5.732 9.587.694 3.178.724 6.879.086 10.7-1.006 6.014-3.74 12.618-7.7 18.595-2.806 4.233-7.15 7.85-13.668 11.375-2.365 1.268-5.206 2.015-7.953 2.737-2.956.776-6.012 1.579-8.235 2.973-.745.467-1.886 1.055-3.168.766 0 .003 0 .003-.002.003z"
        fill="#fff"
      />
      <Path
        d="M49.411 15.544c-2.288-4.386-6.295-6.296-10.559-3.574-3.054 1.95-4.287 4.883-5.927 7.953-1.198 2.245-1.635.407-1.772-1.296-.175-2.184-.953-4.202-1.806-6.18-3.551-8.224-16.192-7.518-21.196-1.175-3.033 3.846-3.389 8.006-2.607 12.781.708 4.33 2.89 7.808 4.585 11.74 1.866 4.324 4.968 8.009 6.373 12.598 1.204 3.934.97 7.478-.268 11.35 4.632-1.535 11.073-2.632 14.798-4.674 3.747-2.029 7.976-4.797 11.014-8.22 1.874-2.111 2.994-4.663 4.296-7.166 1.495-2.867 3.06-5.785 3.77-8.99 1.078-4.798 1.657-10.626-.7-15.147zm-29.15-3.589c-2.28 1.38-4.438 4.298-6.009 6.475-1.84 2.552-2.954 5.415-3.435 8.571-.85-3.304-.29-7.281 1.527-10.131.927-1.455 1.99-2.803 3.452-3.69.835-.51 1.807-.974 2.757-1.185.228-.05 2.214-.345 1.708-.04z"
        fill="#F44E76"
      />
      <Path
        d="M49.411 15.544c-2.098-4.019-5.636-5.955-9.494-4.159a11.51 11.51 0 011.64 2.395c2.357 4.52 1.779 10.346.702 15.144-.712 3.203-2.276 6.122-3.77 8.99-1.305 2.503-2.422 5.054-4.297 7.167-3.039 3.424-7.268 6.191-11.013 8.22-1.616.883-3.738 1.592-6.004 2.234-.162 1.38-.482 2.77-.94 4.203 4.632-1.534 11.073-2.631 14.799-4.673 3.746-2.029 7.975-4.797 11.013-8.22 1.874-2.112 2.994-4.663 4.296-7.166 1.495-2.868 3.06-5.785 3.77-8.99 1.077-4.796 1.656-10.624-.702-15.145z"
        fill="#E04A6F"
      />
      <Path
        d="M27.383 27.086c-.202.056-.223.152-.058.29.205-.055.223-.151.058-.29z"
        fill="#2C2C2C"
      />
      <Path
        d="M53.484 28.566c1.043-6.244.403-13.543-4.813-17.637-5.592-4.39-12.023 1.085-14.816 6.37-.493-2.708-1.65-6.183-3.445-8.276-1.875-2.19-4.815-3.145-7.503-3.607-6.308-1.086-12.59 1.488-15.973 7.216-3.545 6.007-1.879 14.354 1.302 20.195 1.66 3.049 3.087 6.168 4.797 9.198 1.647 2.91 3.177 5.975 3.896 9.28-.104-.477.007.042-.034-.16.34 1.607.42 3.739.04 5.574-.306 1.465-3.259 7.841.223 5.658 4.73-2.968 11.787-3.355 16.331-5.796 4.7-2.542 9.659-5.886 12.72-10.502 3.41-5.146 6.248-11.36 7.275-17.513zm-2.002 2.43c-.716 3.205-2.279 6.123-3.774 8.99-1.302 2.502-2.421 5.055-4.295 7.166-3.04 3.424-7.267 6.192-11.013 8.221-3.727 2.043-10.168 3.138-14.8 4.672 1.24-3.872 1.474-7.413.27-11.347-1.407-4.59-4.51-8.275-6.375-12.6C9.8 32.167 7.618 28.691 6.91 24.36c-.782-4.776-.428-8.935 2.607-12.781 5.003-6.343 17.644-7.05 21.194 1.174.855 1.979 1.634 3.999 1.807 6.18.137 1.704.576 3.543 1.774 1.295 1.638-3.068 2.872-6 5.926-7.951 4.264-2.722 8.271-.811 10.56 3.575 2.356 4.518 1.778 10.347.703 15.144z"
        fill="#2C2C2C"
      />
      <Path
        d="M25.238 11.447c-.139-1.504-3.822-1.005-4.607-.97-2.812.132-5.49 1.616-7.287 3.858-3.138 3.912-4.322 9.58-2.345 14.373.236.573.77 1.866 1.502 1.842 1.113-.04.6-1.25.604-1.992.022-3.1 1.345-6.314 3.09-8.773 1.422-2.004 3.337-4.574 5.307-6.005.85-.617 3.674-.946 3.736-2.333zm-4.123.702c-2.28 1.378-4.437 4.296-6.01 6.474-1.84 2.55-2.954 5.414-3.434 8.572-.848-3.306-.289-7.283 1.526-10.133.928-1.456 1.992-2.803 3.453-3.69.836-.509 1.808-.974 2.758-1.186.228-.05 2.213-.345 1.707-.037zM30.542 25.105c-.203.055-.224.151-.06.287.205-.052.226-.15.06-.287z"
        fill="#2C2C2C"
      />
    </Svg>
  );
}

export default Sticker115D1652;