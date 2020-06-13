import swal from 'sweetalert';

export function missingUsername() {
  swal({
    icon: 'error',
    title: 'Ops!',
    text: 'Enter username to continue.',
    buttons: false,
    timer: 2000,
  });
}

export function userNotFound() {
  swal({
    icon: 'error',
    title: 'Ops, user not found!',
    text: 'Try again.',
    buttons: false,
    timer: 2000,
  });
}
