gcloud functions deploy code-it-image \
--runtime nodejs12 \
--trigger-resource code-it-image-bucket \
--trigger-event google.storage.object.finalize \
--entry-point=imageSharpener