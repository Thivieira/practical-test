import Swal from 'sweetalert2';

export function submissionsPageHandler() {
  console.log(window.submissionsPageConfig);
  return {
    config: window.submissionsPageConfig,
    deleteRecord(submissionId: number) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this submission!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Delete User?',
            text: 'Do you also want to delete the associated user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete the user!',
            cancelButtonText: 'No, keep the user!',
          }).then(async (userResult) => {
            let deleteUser = false;
            if (userResult.isConfirmed) {
              deleteUser = true
            }
            try {
              await this.deleteSubmission(submissionId, deleteUser);
              window.location.reload();
            } catch (e) {
              console.error(e);
            }
          });
        }
      });
    },
    async deleteSubmission(submissionId: number, deleteUser: boolean) {
      try {
        await fetch(this.config.ajax_url, {
          method: 'POST',
          body: new URLSearchParams({ action: this.config.action, id: submissionId.toString(), deleteUser: deleteUser.toString(), security: this.config.security }),
        });
        return;
      } catch (e) {
        return;
      }
    }
  };
}
