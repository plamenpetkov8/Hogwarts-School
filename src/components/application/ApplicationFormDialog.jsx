import { Dialog, DialogContent, DialogTitle } from "@mui/material";

import { useDialog } from "../../contexts/DialogContext";

import ApplicationForm from "./ApplicationForm";
import {
  dialogContentCss,
  dialogTitleCss,
} from "../../css/applicationformdialog";

function ApplicationFormDialog() {
  const { isOpen } = useDialog();

  return (
    <Dialog open={isOpen} fullWidth>
      <DialogTitle variant="h4" sx={dialogTitleCss}>
        Hogwarts admission application
      </DialogTitle>
      <DialogContent sx={dialogContentCss}>
        <ApplicationForm />
      </DialogContent>
    </Dialog>
  );
}

export default ApplicationFormDialog;
